// import Container from 'react-bootstrap/Container';
import { Row,Col,Form,ToggleButton,Button,InputGroup } from 'react-bootstrap';
// import { MdDateRange } from 'react-icons/md';
import '../style/style.css';
import React, { useState } from 'react';
import { ImCalendar } from 'react-icons/im';




function Filter() {
    const [apply, setApply] = useState(false);

    const [dateVal, setDate] = useState(false);
    const dates = [
        { name: 'Day', value: '1' },
        { name: 'Month', value: '2' },
        { name: 'Year', value: '3' },
      ];

      const [bedroomVal, setBedroom] = useState(false);
      const bedrooms = [
          { name: '1', value: '1' },
          { name: '2', value: '2' },
          { name: '3', value: '3' },
          { name: '4', value: '4' },
          { name: '5+', value: '5' },
        ];

      const [bathroomVal, setBathroom] = useState(false);
      const bathrooms = [
          { name: '1', value: '1' },
          { name: '2', value: '2' },
          { name: '3', value: '3' },
          { name: '4', value: '4' },
          { name: '5+', value: '5' },
        ];

  return (

    <Col className='d-flex flex-column fixed-top' style={{marginTop:"6rem"}} sm={3} md={3}>
    <Form>

    <div className='d-flex flex-column gap-2'>
        <h5 className='fw-bold'>Type Of Rent</h5>
        <div className='d-flex gap-3 justify-content-between'>
        {dates.map((date, id) => (
            <ToggleButton
            className='fw-bold w-100'
            key={id}
            id={`date-${id}`}
            type="radio"
            variant={dateVal === date.value? "primary":"light"}
            name="date"
            value={date.value}
            checked={dateVal === date.value}
            onChange={(e) => setDate(e.currentTarget.value)}>
            {date.name}
          </ToggleButton>
        ))}
        </div>
        <div className=''>
            <h5 className='fw-bold'>Date</h5>
        </div>
            <div>
            <InputGroup>
            <Button className='align-item-center' variant="secondary" size="lg" id="search"><ImCalendar /></Button>
            <Form.Control type="date" placeholder="" />
            </InputGroup>
            </div>
        <div className=''>
            <h5 className='fw-bold'>Property Room</h5>
        </div>
            <div>
                <p className='text-secondary fw-bold'>Bedroom</p>
                <div className='d-flex gap-3 justify-content-between'>
                    {bedrooms.map((bedroom, id) => (
                    <ToggleButton
                             className='w-100 fw-bold'
                             key={id}
                             id={`bedroom-${id}`}
                             type="radio"
                             variant={bedroomVal === bedroom.value? "primary":"light"}
                             name="bedroom"
                             value={bedroom.value}
                             checked={bedroomVal === bedroom.value}
                             onChange={(e) => setBedroom(e.currentTarget.value)}>
                                {bedroom.name}
                    </ToggleButton>
                    ))}
                </div>
            </div>
            <div>
                <p className='text-secondary fw-bold'>Bathroom</p>
                <div className='d-flex gap-3 justify-content-between'>
                    {bathrooms.map((bathroom, id) => (
                    <ToggleButton
                             className='w-100 fw-bold'
                             key={id}
                             id={`bathroom-${id}`}
                             type="radio"
                             variant={bathroomVal === bathroom.value? "primary":"light"}
                             name="bathroom"
                             value={bathroom.value}
                             checked={bathroomVal === bathroom.value}
                             onChange={(e) => setBathroom(e.currentTarget.value)}>
                                {bathroom.name}
                    </ToggleButton>
                    ))}
                </div>
            </div>
            <div className=''>
            <div className="d-flex flex-column gap-2">
                <h5 className="fw-bold m-0">Amenities</h5>
                <div className="d-flex justify-content-between">
                   <label className="text-secondary fw-bold" htmlFor="">Furnished</label>
                   <Form.Check aria-label="Furnished" />
                </div>
                <div className="d-flex justify-content-between">
                    <label className="text-secondary fw-bold" htmlFor="">Pet Allowed</label>
                    <Form.Check aria-label="Pet Allowed" />
                </div>
                <div className="d-flex justify-content-between">
                    <label className="text-secondary fw-bold" htmlFor="">Shared Accomodation</label>
                    <Form.Check aria-label="Shared Accomodation" />
                </div>
            </div>
            </div>
            <div className="d-flex flex-column gap-3">
                 <h5 className="fw-bold">Budget</h5>
                    <Form.Group as={Row} className="">
                     <Form.Label column sm="4">
                        Less than IDR.
                     </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
            </div>
             <div className='d-flex align-items-center'>
            <ToggleButton 
                className="fc ms-auto fw-bold"
                id="toggle-check"
                type="submit"
                variant="outline-primary"
                checked={apply}
                value="1"
                onChange={(e) => setApply(e.currentTarget.apply)}>
                    APPLY
            </ToggleButton>
             </div>
    </div>
    </Form>
    </Col>

  );
}

export default Filter;