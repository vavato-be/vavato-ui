import React from 'react'
import Card from '../Card'

function CardStyleGuide() {
  return (
    <Card>
      <div className='title'>&lt;Card&gt;</div>
      <p>A raised element representing an item in a list or a section.</p>
      <Card>
        <div className='title'>A card has a title with className title</div>
        <div>And a body without any special classes</div>
      </Card>
      <Card className='raise-on-hover'>
        <div className='title'>&lt;Card className=raise-on-hover&gt;</div>
        <div>
          When class raise-on-hover is present, the card will raise in elevation
          when hovered
        </div>
      </Card>
      <Card className='card-2'>
        <div className='title'>&lt;Card className=card-2&gt;</div>
        <div>
          A card may have different elevations with classes card-2, card-3,
          card-4 and card-5
        </div>
      </Card>
      <Card className='card-3'>
        <div className='title'>&lt;Card className=card-3&gt;</div>
        <div>
          A card may have different elevations with classes card-2, card-3,
          card-4 and card-5
        </div>
      </Card>
      <Card className='card-4'>
        <div className='title'>&lt;Card className=card-4&gt;</div>
        <div>
          A card may have different elevations with classes card-2, card-3,
          card-4 and card-5
        </div>
      </Card>
      <Card className='card-5'>
        <div className='title'>&lt;Card className=card-5&gt;</div>
        <div>
          A card may have different elevations with classes card-2, card-3,
          card-4 and card-5
        </div>
      </Card>
    </Card>
  )
}

export default CardStyleGuide
