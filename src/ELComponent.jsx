import React from 'react';
import {
  Panel,
  PanelGroup,
} from 'react-bootstrap';
import './ELComponent.css';

function EmployeeComponent(props) {
  return (
    <Panel eventKey={props.value} bsStyle="info">
      <Panel.Heading >
        <Panel.Title toggle>
         {props.value.name}
        </Panel.Title>
      </Panel.Heading >
      <Panel.Body collapsible onClick={() => alert(`works in ${props.value.location}`)}>
        {props.value.position} from {props.value.country}
      </Panel.Body>
    </Panel >
  );
}

class ELComponent extends React.Component {
  constructor(props) {
    super(props);
    // employee list, may get from db
    this.state = {
      employees: [{
        name: 'Sebastien C.',
        position: 'Developer',
        country: 'France',
        location: 'Beijing',
        id: 1,
      },
      {
        name: 'Guangjie C.',
        position: 'Developer',
        country: 'Singapore',
        location: 'Shanghai',
        id: 2,
      },
      {
        name: 'Hannes S.',
        position: 'Developer',
        country: 'Germany',
        location: 'Beijing',
        id: 3,
      },
      ],
    };
  }

  // render a EmployeeComponent
  renderEmployee(employeeInfo) {
    return (<EmployeeComponent
      key={
          employeeInfo.id
        }
      className="EmployeeComponent"
      value={
          employeeInfo
        }
    />);
  }

  render() {
    return (<PanelGroup accordion id="board" > { /* insert EmployeeComponent into board according to the employees count */ } {
            this.state.employees.map(item => (
              this.renderEmployee(item)))
          }
            </PanelGroup>
    );
  }
}

export default ELComponent;
