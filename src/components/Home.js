import React from 'react';
import { Container, Row, Col, Accordion, Dropdown } from 'react-bootstrap';
{/*<p style={{marginLeft: 750}}>This is just the basic. We will be tuning it further on.</p>*/}
const Home = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>Welcome to Dynamix Health Initiative</h1>
          <p>Empowering Health Through Innovation.</p>
        </Col>
      </Row>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What do you understand with the term "Chronic Diseases"??</Accordion.Header>
          <Accordion.Body>
          A chronic disease is a long-lasting condition that typically progresses slowly and persists over an extended period, often requiring ongoing medical management and lifestyle adjustments to control symptoms and prevent complications.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can one recognize&nbsp;the signs&nbsp;and&nbsp;symptoms&nbsp;of a chronic disease?</Accordion.Header>
          <Accordion.Body>
          Recognizing chronic disease involves observing persistent symptoms like ongoing pain, fatigue, or recurring issues that last for months or longer, prompting consultation with a healthcare provider for diagnosis and management.
          </Accordion.Body>
          <Accordion.Body>
          For more information, please scroll down...
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How can individuals &nbsp;effectively manage&nbsp; chronic diseases?</Accordion.Header>
          <Accordion.Body>
          Managing chronic diseases involves adherence to prescribed medications, lifestyle modifications such as diet and exercise, regular monitoring of symptoms, and frequent consultations with healthcare providers for adjustments and support.
          </Accordion.Body>
          <Accordion.Body>
          For more information, please scroll down...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <br></br>

      <br></br>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Diabetes</Accordion.Header>
          <Accordion.Body>
            <b>Type 1 Diabetes:</b> An autoimmune condition where the body attacks insulin-producing cells in the pancreas. Insulin is necessary to regulate blood sugar levels.
          </Accordion.Body>
          <Accordion.Body>
            <b>Type 2 Diabetes:</b> A metabolic disorder where the body becomes resistant to insulin or doesn't produce enough insulin. It's often associated with obesity and lifestyle factors.
          </Accordion.Body>
          <Accordion.Body>
            <b>Effects:</b> High blood sugar levels can lead to complications like heart disease, kidney failure, blindness, and nerve damage.
          </Accordion.Body>
          <Accordion.Body>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>EXERCISES</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><b>PERSONALISED DIET</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Cardiovascular Diseases</Accordion.Header>
          <Accordion.Body>
            <b>Coronary Artery Disease (CAD):</b> Narrowing or blockage of the coronary arteries, usually caused by atherosclerosis (buildup of plaque).
          </Accordion.Body>
          <Accordion.Body>
            <b>Hypertension (High Blood Pressure):</b> A condition where the force of the blood against artery walls is too high, which can lead to heart attack, stroke, and other issues.
          </Accordion.Body>
          <Accordion.Body>
            <b>Effects:</b> These diseases can cause heart attacks, strokes, and heart failure, significantly impacting life expectancy and quality of life.
          </Accordion.Body>
          <Accordion.Body>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>EXERCISES</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><b>PERSONALISED DIET</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Chronic Respiratory Diseases</Accordion.Header>
          <Accordion.Body>
            <b>Chronic Obstructive Pulmonary Disease (COPD):</b> A group of lung diseases that block airflow and make it difficult to breathe, including emphysema and chronic bronchitis.
          </Accordion.Body>
          <Accordion.Body>
            <b>Asthma:</b> A condition in which the airways narrow and swell and may produce extra mucus, leading to breathing difficulties.
          </Accordion.Body>
          <Accordion.Body>
            <b>Effects:</b> Symptoms include coughing, wheezing, shortness of breath, and chest tightness. Severe cases can be life-threatening and severely limit physical activity.
          </Accordion.Body>
          <Accordion.Body>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>EXERCISES</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><b>PERSONALISED DIET</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Cancer</Accordion.Header>
          <Accordion.Body>
            <b>Breast Cancer:</b> A malignant tumor that develops from breast cells.
          </Accordion.Body>
          <Accordion.Body>
            <b>Lung Cancer:</b> A type of cancer that begins in the lungs, often associated with smoking.
          </Accordion.Body>
          <Accordion.Body>
            <b>Effects:</b> Depending on the type and stage, cancer can cause severe pain, fatigue, weight loss, and other symptoms. Treatments like chemotherapy, radiation, and surgery can be rigorous and debilitating.
          </Accordion.Body>
          <Accordion.Body>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>EXERCISES</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><b>PERSONALISED DIET</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Arthritis</Accordion.Header>
          <Accordion.Body>
            <b>Osteoarthritis:</b> A degenerative joint disease where the cartilage that cushions the ends of bones wears down over time.
          </Accordion.Body>
          <Accordion.Body>
            <b>Rheumatoid Arthritis:</b> An autoimmune disorder that primarily affects joints, leading to inflammation and deformity.
          </Accordion.Body>
          <Accordion.Body>
            <b>Effects:</b> Causes joint pain, stiffness, and swelling, which can limit mobility and daily activities.
          </Accordion.Body>
          <Accordion.Body>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>EXERCISES</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><b>PERSONALISED DIET</b></Accordion.Header>
                <Accordion.Body>
                  -
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <br></br>

      
      {/*<p style={{marginLeft: 750}}>This is just the basic. We will be tuning it further on.</p>*/}
    </Container>
  );
};

export default Home;
