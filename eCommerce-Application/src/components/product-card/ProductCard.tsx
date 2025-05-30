import { Card, Typography, Row, Space } from 'antd';
import { DataProduct } from '../../api/types-api';

const { Title, Text, Link } = Typography;

export default function ProductCard({ content }: { content: DataProduct }) {
  return (
    <Link href="/">
      <Card hoverable style={{ width: 300 }} cover={<img src={content.current.masterVariant.images![0].url} alt="cover" />}>
        <Row>
          <Title level={4} ellipsis style={{ marginTop: 0 }} title={content.current.name.en}>
            {content.current.name.en}
          </Title>
        </Row>
        <Row>
          <Text ellipsis>{content.current.masterVariant.attributes![0].value}</Text>
        </Row>
        <Row>
          <Text type="secondary">{content.current.masterVariant.attributes![0].value}</Text>
        </Row>
        <Row style={{ justifySelf: 'end' }}>
          <Space size="small">
            <Text
              strong
              delete={!!content.current.masterVariant.prices![0].value.centAmount}
              disabled={!!content.current.masterVariant.prices![0].value.centAmount}
              style={{ fontSize: 20 }}
            >{`$${content.current.masterVariant.prices![0].value.centAmount / 100}`}</Text>
            {content.current.masterVariant.prices![0].value.centAmount ? (
              <Text
                strong
                style={{ fontSize: 20, color: '#db4444' }}
              >{`$${(content.current.masterVariant.prices![0].value.centAmount / 100 * (1 - content.current.masterVariant.prices![0].value.centAmount)).toFixed(2)}`}</Text> // logic of calculating a new price can be changed. This exp is only for demo purpose
            ) : undefined}
          </Space>
        </Row>
      </Card>
    </Link>
  );
}
