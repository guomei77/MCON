import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';


class ELComponent extends React.Component {
  render(){
    return (
      <PanelGroup accordion id="board">
        <Panel eventKey="1">
          <Panel.Heading>
            <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit,
          </Panel.Body>
        </Panel>
        <Panel eventKey="2">
          <Panel.Heading>
            <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod
          </Panel.Body>
        </Panel>
        <Panel eventKey="3">
          <Panel.Heading>
            <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit,
          </Panel.Body>
        </Panel>
      </PanelGroup>
    );
  }
}
ReactDOM.render(<ELComponent/>, document.getElementById('root'));
