import React, { useState } from 'react';
import { Row, Col, Container, ButtonGroup, Button } from 'react-bootstrap';

import { useSearchParams } from 'react-router-dom';

import UserList from '../components/Admin/UserList';
import DrinkList from '../components/Admin/DrinkList';
import AddNewDrinks from '../components/Admin/AddNewDrinks';
import OrderList from '../components/Admin/OrderList';

const Admin = () => {
  
  const [activeComponent, setActiveComponent] = useState('userlist');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
    setSearchParams({ view: componentName });
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'userlist':
        return <UserList />;
      case 'drinklist':
        return <DrinkList />;
      case 'addnewdrinks':
        return <AddNewDrinks />;
      case 'ordelist':
        return <OrderList />;
      default:
        return null;
    }
  };

  // Get the view from URL search parameters
  const view = searchParams.get('view');

  // Set the active component based on the view from URL search parameters
  if (view && activeComponent !== view) {
    setActiveComponent(view);
  }

  return (
    <>
      <Container>
        <Row>
          <h1 className='text-center mt- text-white p-2'>Admin Panel</h1>
          <Col md={2}>
            <div className='align-items-center'>
              <ButtonGroup vertical style={{ minHeight: '400px' }}>
                <Button
                  onClick={() => handleComponentChange('userlist')}
                  className={`btn btn-success text-white d-flex align-items-center justify-content-center ${activeComponent === 'userlist' ? 'active' : ''}`}
                >
                  All Users
                </Button>
                <Button
                  onClick={() => handleComponentChange('drinklist')}
                  className={`btn btn-success text-white d-flex align-items-center justify-content-center ${activeComponent === 'drinklist' ? 'active' : ''}`}
                >
                  All Beverages
                </Button>
                <Button
                  onClick={() => handleComponentChange('ordelist')}
                  className={`btn btn-success text-white d-flex align-items-center justify-content-center ${activeComponent === 'ordelist' ? 'active' : ''}`}
                >
                  Orders
                </Button>
                <Button
                  onClick={() => handleComponentChange('addnewdrinks')}
                  className={`btn btn-success text-white d-flex align-items-center justify-content-center ${activeComponent === 'addnewdrinks' ? 'active' : ''}`}
                >
                  Add new Beverages
                </Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col md={10}>
            {renderComponent()}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
