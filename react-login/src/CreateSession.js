import React from 'react';
import './CreateSession.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './DragDrop';
import drawing from './drawing.png';
import painting from './Painting.png';
import chalk from './Chalk.png';
import artists from './Artists.png';
import colorPad from './ColorMatch.png';
import artBoard from './ArtBoard.png';
import square from './square.png';

import math from './math.png';
import boat from './boat.png';
import drum from './drum.png';
import cd from './CDPlayer.png';
import badminton from './Badminton.png';
import football from './Football.png';

import { Card } from 'antd';
import { PageHeader } from 'antd';
import { Col, Divider, Row } from 'antd';

function CreateSession() {
  const gotoActivitySes = () => {
    window.location.href = '/ActivityList';
  };

  const { Meta } = Card;

  const style_Art = {
    background: '#BECEFF',
    padding: '10px 10px',
  };
  const style_Math = {
    background: '#F4B87D',
    padding: '10px 10px',
  };
  const style_Music = {
    background: '#BBDABC',
    padding: '10px 10px',
  };
  const style_Sport = {
    background: '#D6ADDD',
    padding: '10px 10px',
  };

  let index = 0;
  let sessionList = document.getElementsByClassName('sessionList');
  let confirmBtn = document.getElementById('confirm');
  let session = [];

  const add = function (e) {
    console.log(e);
    console.log('adding new image');
    console.log(sessionList[0]);
    // sessionList[index].src = this.src;
    sessionList[0] = <img className="sessionList" src={drawing} />;

    index++;
    if (index == 4) {
      console.log(session);
      confirmBtn.disabled = false;
    }
  };

  return (
    <div className="createSession">
      <h3>Create your own session</h3>
      <div className="fillSession"></div>
      <p>Session One</p>
      {/* <div className="boxGroup">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div> */}

      <div className="row">
        <img className="sessionList" src={drum} />
        <img className="sessionList" src={drum} />
        <img className="sessionList" src={drum} />
        <img className="sessionList" src={drum} />
      </div>

      {/* ~~~~~~~~~~~~~~ Art ~~~~~~~~~~~~ */}
      <Divider orientation="left">Art</Divider>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row sessionList" span={6}>
          <div style={style_Art}>
            <Card
              hoverable
              cover={<img alt="example" src={drawing} />}
              onClick={add}
            >
              <Meta title="MasterPiece" description="This is a drawing game." />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style_Art}>
            <Card
              hoverable
              cover={<img alt="example" src={colorPad} />}
              onClick={add}
            >
              <Meta
                title="Color Matching"
                description="Let's try the tangible dots."
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style_Art}>
            <Card hoverable cover={<img alt="example" src={painting} />}>
              <Meta
                title="PaintingTool"
                description="This is a art social game."
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style_Art}>
            <Card hoverable cover={<img alt="example" src={chalk} />}>
              <Meta title="RockChalk!" description="This is a drawing game." />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style_Art}>
            <Card hoverable cover={<img alt="example" src={artists} />}>
              <Meta title="Art Board" description="This is a drawing game." />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style_Art}>
            <Card hoverable cover={<img alt="example" src={drawing} />}>
              <Meta title="MasterPiece" description="This is a drawing game." />
            </Card>
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <div style={style_Art}>
            <Card hoverable cover={<img alt="example" src={artBoard} />}>
              <Meta title="MasterPiece" description="This is a drawing game." />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style_Art}>
            <Card hoverable cover={<img alt="example" src={square} />}>
              <Meta title="MasterPiece" description="This is a drawing game." />
            </Card>
          </div>
        </Col>
      </Row>

      <button className="button-next" onClick={gotoActivitySes}>
        {' '}
        Confirm{' '}
      </button>
    </div>
  );
}

export default CreateSession;

/* <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider> */
