import { useContext } from 'react'
import ToasterContext from './ui/ToasterContext'
import { extractLinks, extractPagination } from './ui/utils'

function requestHeaders() {
  const token = window.localStorage.getItem('accessToken')
  const client = window.localStorage.getItem('client')
  const uid = window.localStorage.getItem('uid')

  return {
    'Api-Version': 'v1',
    'Access-Token': token,
    Authorization: `Bearer ${token}`,
    Client: client,
    'Content-Type': 'application/json',
    'Token-Type': 'Bearer',
    Uid: uid
  }
}

async function fetchData(resource) {
  return await fetchResource(resource)
}

async function fetchJSON(resource) {
  return await fetchResource(resource.json())
}

async function postData(resource, params) {
  return await postResource(resource, params)
}

async function putData(resource, params) {
  return await postResource(resource, params, 'PUT')
}

async function deleteData(resource) {
  return await fetchResource(resource, 'DELETE')
}

async function fetchResource(resource, method = 'GET') {
  const headers = requestHeaders()

  const response = await fetch(resource, {
    method,
    headers
  })
  const result = await response
  if (result.headers.get('client')) {
    window.localStorage.setItem(
      'accessToken',
      result.headers.get('access-token')
    )
    window.localStorage.setItem('client', result.headers.get('client'))
    window.localStorage.setItem('uid', result.headers.get('uid'))
  }
  return result
}

async function postResource(resource, params, method = 'POST') {
  const headers = requestHeaders()

  const response = await fetch(resource, {
    method,
    headers,
    body: JSON.stringify(params)
  })
  const result = await response
  if (result.headers.get('client')) {
    window.localStorage.setItem(
      'accessToken',
      result.headers.get('access-token')
    )
    window.localStorage.setItem('client', result.headers.get('client'))
    window.localStorage.setItem('uid', result.headers.get('uid'))
  }
  return result
}

function assertResponse(result, json = null, error = () => {}) {
  if (result.ok) {
    return true
  }

  let message = `Error fetching data: ${result.status} - ${result.statusText}`
  if (json && json.errors) {
    message += ':\n' + json.errors.join('\n')
  }
  if (json && json.error) {
    message += ':\n' + json.error
  }
  if (json && json.exception) {
    message += ':\n' + json.exception
  }
  if (json && json.message) {
    message += ':\n' + json.message
  }
  console.error(message, json)
  error(message)
  throw message
}

async function makeGet(url, callback = () => {}) {
  const { error } = useContext(ToasterContext)

  const result = await fetchData(url)
  const json = await result.json()
  assertResponse(result, json, error)
  callback(json)
}

async function makePaginatedGet(url, callback = () => {}) {
  const { error } = useContext(ToasterContext)

  const result = await fetchData(url)
  const json = await result.json()
  const headers = await result.headers
  const links = extractLinks(headers.get('Link'))
  const pagination = extractPagination(headers)
  assertResponse(result, json, error)
  callback({ data: json, links: links, pagination: pagination }) // eslint-disable-line
}

async function makePost(url, params, callback = () => {}) {
  const { error } = useContext(ToasterContext)

  const result = await postResource(url, params)
  const json = await result.json()
  assertResponse(result, json, error)
  callback(json)
}

async function makePut(url, params, callback = () => {}) {
  const { error } = useContext(ToasterContext)

  const result = await postResource(url, params, 'PUT')
  const json = await result.json()
  assertResponse(result, json, error)
  callback(json)
}

export {
  fetchData,
  fetchJSON,
  postData,
  putData,
  deleteData,
  makeGet,
  makePaginatedGet,
  makePost,
  makePut,
  requestHeaders
}
