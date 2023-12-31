import { Col, Row } from "antd";
import CardsList from '../cards/CardsList';

export default function HomePoliticalGroups() {
  return (
    <section id="parties-section" className="section-home-parties-list section--grey">
      <Row>
        <Col span={24} lg={24}>
          <Row typeof="flex" justify="space-between">
            <Col span={24} md={10}>
              <h2>Political Groups</h2>
            </Col>
          </Row>
          <CardsList theme={'4x3'} />
        </Col>
      </Row>
    </section>
  );
};
