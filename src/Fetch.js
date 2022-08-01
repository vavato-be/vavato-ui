import { useEffect, useContext } from 'react'
import { useEnv } from './ui/EnvContext'
import ToasterContext from './ui/ToasterContext'
import { extractLinks, extractPagination } from './ui/utils'

function requestHeaders(extraReqHeaders = {}) {
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
    Uid: uid,
    ...extraReqHeaders
  }
}

async function fetchData(resource, extraReqHeaders = {}) {
  return await fetchResource(resource, 'GET', extraReqHeaders)
}

async function fetchJSON(resource, extraReqHeaders = {}) {
  return await fetchResource(resource.json(), 'GET', extraReqHeaders)
}

async function postData(resource, params, extraReqHeaders = {}) {
  return await postResource(resource, params, 'POST', extraReqHeaders)
}

async function putData(resource, params, extraReqHeaders = {}) {
  return await postResource(resource, params, 'PUT', extraReqHeaders)
}

async function deleteData(resource, extraReqHeaders = {}) {
  return await fetchResource(resource, 'DELETE', extraReqHeaders)
}

async function fetchResource(resource, method, extraReqHeaders = {}) {
  const headers = requestHeaders(extraReqHeaders)

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

async function postResource(resource, params, method, extraReqHeaders = {}) {
  const headers = requestHeaders(extraReqHeaders)

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

function useFetch(
  relativeUrl,
  callback = () => {},
  dependencies = [relativeUrl],
  extraReqHeaders = {}
) {
  const domain = useEnv('DOMAIN')
  const { error } = useContext(ToasterContext)

  /* eslint-disable */
  return useEffect(() => {
    const validDeps = dependencies.filter((d) => d)
    if (validDeps.length !== dependencies.length) {
      return
    }

    const doFetch = async () => {
      const resource = `${domain}${relativeUrl}`
      const result = await fetchData(resource, extraReqHeaders)
      const json = await result.json()
      assertResponse(result, json, error)
      callback(json)
      return json
    }
    return doFetch()
  }, dependencies)
  /* eslint-enable */
}

function usePagingFetch(url, callback = () => {}, dependencies = [url], extraReqHeaders = {}) {
  const { error } = useContext(ToasterContext)

  /* eslint-disable */
  return useEffect(() => {
    const validDeps = dependencies.filter((d) => d)
    if (validDeps.length !== dependencies.length) {
      return
    }

    const doFetch = async () => {
      const result = await fetchData(url, extraReqHeaders)
      const json = await result.json()
      const headers = await result.headers
      const links = extractLinks(headers.get('Link'))
      const pagination = extractPagination(headers)
      assertResponse(result, json, error)
      callback({ data: json, links: links, pagination: pagination })
    }
    doFetch()
  }, dependencies)
  /* eslint-enable */
}

async function usePost(
  relativeUrl,
  params,
  callback = () => {},
  dependencies = [],
  extraReqHeaders = {}
) {
  const domain = useEnv('DOMAIN')
  const { error } = useContext(ToasterContext)

  /* eslint-disable */
  return useEffect(() => {
    const validDeps = dependencies.filter((d) => d)
    if (validDeps.length !== dependencies.length) {
      return
    }
    const doPost = async () => {
      const resource = `${domain}${relativeUrl}`
      const result = await postResource(resource, params, 'POST', extraReqHeaders)
      const json = await result.json()
      assertResponse(result, json, error)
      callback(json)
    }
    doPost()
  }, dependencies)
  /* eslint-enable */
}
async function usePut(
  relativeUrl,
  params,
  callback = () => {},
  dependencies = [],
  extraReqHeaders = {}
) {
  const domain = useEnv('DOMAIN')
  const { error } = useContext(ToasterContext)

  /* eslint-disable */
  return useEffect(() => {
    const validDeps = dependencies.filter((d) => d)
    if (validDeps.length !== dependencies.length) {
      return
    }
    const doPut = async () => {
      const resource = `${domain}${relativeUrl}`
      const result = await postResource(resource, params, 'PUT', extraReqHeaders)
      const json = await result.json()
      assertResponse(result, json, error)
      callback(json)
    }
    doPut()
  }, dependencies)
  /* eslint-enable */
}

export {
  fetchData,
  fetchJSON,
  postData,
  putData,
  deleteData,
  useFetch,
  usePost,
  usePagingFetch,
  usePut,
  requestHeaders
}
