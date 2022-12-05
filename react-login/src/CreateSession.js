import React, { useState } from 'react';
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
import pic from './Picture.png';
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
  const [index, setIndex] = useState(0);

  const gotoActivitySes = () => {
    window.location.href = '/ActivityList?tab=2';
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

  let sessionList = document.getElementsByClassName('sessionList');
  let confirmBtn = document.getElementById('confirm');
  let session = [];

  const handleClick = function (e) {
    console.log('index:  baobao', index);
    sessionList[index].setAttribute('src', e.target.getAttribute('src'));
    // session.push(this.id);
    setIndex(index + 1);
    if (index == 4) {
      confirmBtn.disabled = false;
    }
  };

  return (
    <div className="createSession">
      <h3>Create your own session</h3>
      <div className="h4-subTitle">Pick 4 activities you like</div>
      <div className="row">
        <img className="sessionList" src={drum} />
        <img className="sessionList" src={drum} />
        <img className="sessionList" src={drum} />
        <img className="sessionList" src={drum} />
      </div>
      <div className="activityList">
        {/* ~~~~~~~~~~~~~~ Art ~~~~~~~~~~~~ */}
        <Divider orientation="left">Art</Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style_Art}>
              <Card
                hoverable
                cover={<img alt="example" src={drawing} />}
                onClick={handleClick}
              >
                <Meta
                  title="MasterPiece"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Art}>
              <Card
                hoverable
                cover={<img alt="example" src={colorPad} />}
                onClick={handleClick}
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
              <Card
                hoverable
                cover={
                  <img alt="example" src={painting} onClick={handleClick} />
                }
              >
                <Meta
                  title="PaintingTool"
                  description="This is a art social game."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Art}>
              <Card
                hoverable
                cover={<img alt="example" src={chalk} onClick={handleClick} />}
              >
                <Meta
                  title="RockChalk!"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Art}>
              <Card
                hoverable
                cover={
                  <img alt="example" src={artists} onClick={handleClick} />
                }
              >
                <Meta title="Art Board" description="This is a drawing game." />
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style_Art}>
              <Card
                hoverable
                cover={<img alt="example" src={pic} onClick={handleClick} />}
              >
                <Meta
                  title="Traveling Artist"
                  description="This is a traveling game."
                />
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style_Art}>
              <Card
                hoverable
                cover={
                  <img alt="example" src={artBoard} onClick={handleClick} />
                }
              >
                <Meta
                  title="MasterPiece"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Art}>
              <Card
                hoverable
                cover={<img alt="example" src={square} onClick={handleClick} />}
              >
                <Meta
                  title="MasterPiece"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
        </Row>

        {/* ---------------- Math ---------------- */}
        <Divider orientation="left">Math</Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style_Math}>
              <Card
                hoverable
                cover={<img alt="example" src={math} />}
                onClick={handleClick}
              >
                <Meta
                  title="NumberMatch"
                  description="Interactive with numbers."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Math}>
              <Card
                hoverable
                cover={<img alt="example" src={colorPad} />}
                onClick={handleClick}
              >
                <Meta
                  title="Coloar Matching"
                  description="Interactive with numbers."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Math}>
              <Card
                hoverable
                cover={<img alt="example" src={chalk} />}
                onClick={handleClick}
              >
                <Meta
                  title="RockChalk!"
                  description="Interactive with numbers."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Math}>
              <Card
                hoverable
                cover={<img alt="example" src={painting} />}
                onClick={handleClick}
              >
                <Meta
                  title="PaintingTool"
                  description="Interactive with numbers."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Math}>
              <Card
                hoverable
                cover={<img alt="example" src={artists} />}
                onClick={handleClick}
              >
                <Meta
                  title="Art Board"
                  description="Interactive with numbers."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Math}>
              <Card
                hoverable
                cover={<img alt="example" src={drawing} />}
                onClick={handleClick}
              >
                <Meta
                  title="MasterPiece"
                  description="Interactive with numbers."
                />
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style_Math}>
              <Card
                hoverable
                cover={<img alt="example" src={artBoard} />}
                onClick={handleClick}
              >
                <Meta
                  title="MasterPiece"
                  description="Interactive with numbers."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Math}>
              <Card
                hoverable
                cover={<img alt="example" src={square} />}
                onClick={handleClick}
              >
                <Meta
                  title="MasterPiece"
                  description="Interactive with numbers."
                />
              </Card>
            </div>
          </Col>
        </Row>

        {/* ---------------- Music ---------------- */}
        <Divider orientation="left">Music</Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style_Music}>
              <Card
                hoverable
                cover={<img alt="example" src={drum} />}
                onClick={handleClick}
              >
                <Meta title="Beat It" description="Druming with music." />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Music}>
              <Card
                hoverable
                cover={<img alt="example" src={cd} />}
                onClick={handleClick}
              >
                <Meta
                  title="MasterPiece"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Music}>
              <Card
                hoverable
                cover={<img alt="example" src={chalk} />}
                onClick={handleClick}
              >
                <Meta
                  title="RockChalk!"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Music}>
              <Card
                hoverable
                cover={<img alt="example" src={painting} />}
                onClick={handleClick}
              >
                <Meta
                  title="PaintingTool"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Music}>
              <Card
                hoverable
                cover={<img alt="example" src={artists} />}
                onClick={handleClick}
              >
                <Meta title="Art Board" description="This is a drawing game." />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Music}>
              <Card
                hoverable
                cover={<img alt="example" src={drawing} />}
                onClick={handleClick}
              >
                <Meta
                  title="MasterPiece"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style_Music}>
              <Card
                hoverable
                cover={<img alt="example" src={artBoard} />}
                onClick={handleClick}
              >
                <Meta
                  title="MasterPiece"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style_Music}>
              <Card
                hoverable
                cover={<img alt="example" src={square} />}
                onClick={handleClick}
              >
                <Meta
                  title="MasterPiece"
                  description="This is a drawing game."
                />
              </Card>
            </div>
          </Col>
          {/* ---------------- Sport ---------------- */}
          <Divider orientation="left">Sport</Divider>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={6}>
              <div style={style_Sport}>
                <Card
                  hoverable
                  cover={<img alt="example" src={boat} />}
                  onClick={handleClick}
                >
                  <Meta
                    title="RiverBoat"
                    description="Let's rowing with your loved one on peaceful lake."
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style_Sport}>
                <Card
                  hoverable
                  cover={
                    <img alt="example" src={football} onClick={handleClick} />
                  }
                >
                  <Meta
                    title="FootballPlayer"
                    description="This is a football game."
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style_Sport}>
                <Card
                  hoverable
                  cover={
                    <img alt="example" src={badminton} onClick={handleClick} />
                  }
                >
                  <Meta
                    title="Badminton"
                    description="This is a badminton game."
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style_Sport}>
                <Card
                  hoverable
                  cover={
                    <img alt="example" src={painting} onClick={handleClick} />
                  }
                >
                  <Meta
                    title="PaintingTool"
                    description="This is a drawing game."
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style_Sport}>
                <Card
                  hoverable
                  cover={
                    <img alt="example" src={artists} onClick={handleClick} />
                  }
                >
                  <Meta
                    title="Art Board"
                    description="This is a drawing game."
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style_Sport}>
                <Card
                  hoverable
                  cover={
                    <img alt="example" src={drawing} onClick={handleClick} />
                  }
                >
                  <Meta
                    title="MasterPiece"
                    description="This is a drawing game."
                  />
                </Card>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div style={style_Sport}>
                <Card
                  hoverable
                  cover={
                    <img alt="example" src={artBoard} onClick={handleClick} />
                  }
                >
                  <Meta
                    title="MasterPiece"
                    description="This is a drawing game."
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style_Sport}>
                <Card
                  hoverable
                  cover={
                    <img alt="example" src={square} onClick={handleClick} />
                  }
                >
                  <Meta
                    title="MasterPiece"
                    description="This is a drawing game."
                  />
                </Card>
              </div>
            </Col>
          </Row>
        </Row>
      </div>

      <button className="button-confirm" onClick={gotoActivitySes}>
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
