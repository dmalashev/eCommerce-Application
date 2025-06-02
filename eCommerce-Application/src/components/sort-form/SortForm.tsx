import { Button, Checkbox, Flex, Form, InputNumber, Divider, Collapse } from 'antd';
import { JSX } from 'react';
import { MusicGenres, MusicCountries, MusicLabels } from '../../types/enums';

type FilterForm = {
  genres?: string[];
  priceFrom?: number;
  priceTo?: number;
  discounted?: boolean;
  countries?: string[];
  yearsFrom?: number;
  yearsTo?: number;
  labels?: string[];
};

const onFinish = (values: FilterForm) => {
  console.log('Success:', values);
};

export default function SortForm(): JSX.Element {
  const genresCheckboxes: JSX.Element[] = Object.values(MusicGenres).map((genre) => (
    <Checkbox value={genre}>{genre}</Checkbox>
  ));

  const countriesCheckboxes: JSX.Element[] = Object.values(MusicCountries).map((country) => (
    <Checkbox value={country}>{country}</Checkbox>
  ));

  const labelsCheckboxes: JSX.Element[] = Object.values(MusicLabels).map((label) => (
    <Checkbox value={label}>{label}</Checkbox>
  ));

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Flex vertical gap="small" style={{ padding: '10px 10px' }}>
        <Collapse ghost>
          <Collapse.Panel key="1" header="Genres">
            <Form.Item name="genres">
              <Checkbox.Group>
                <Flex vertical>{genresCheckboxes}</Flex>
              </Checkbox.Group>
            </Form.Item>
          </Collapse.Panel>

          <Collapse.Panel key="2" header="Countries">
            <Form.Item name="countries">
              <Checkbox.Group>
                <Flex vertical>{countriesCheckboxes}</Flex>
              </Checkbox.Group>
            </Form.Item>
          </Collapse.Panel>

          <Collapse.Panel key="3" header="Years">
            <Flex justify="space-between" align="center">
              <Form.Item label="From" name="yearsFrom">
                <InputNumber min={0} style={{ width: 70 }} />
              </Form.Item>

              <div style={{ paddingTop: 4 }}>-</div>

              <Form.Item label="To" name="yearsTo">
                <InputNumber min={0} style={{ width: 70 }} />
              </Form.Item>
            </Flex>
          </Collapse.Panel>

          <Collapse.Panel key="4" header="Labels">
            <Form.Item name="labels">
              <Checkbox.Group>
                <Flex vertical>{labelsCheckboxes}</Flex>
              </Checkbox.Group>
            </Form.Item>
          </Collapse.Panel>

          <Collapse.Panel key="5" header="Price">
            <Flex justify="space-between" align="center">
              <Form.Item label="From" name="priceFrom">
                <InputNumber min={0} prefix="$" style={{ width: 70 }} />
              </Form.Item>

              <div style={{ paddingTop: 4 }}>-</div>

              <Form.Item label="To" name="priceTo">
                <InputNumber min={0} prefix="$" style={{ width: 70 }} />
              </Form.Item>
            </Flex>

            <Divider />

            <Form.Item name="discounted" valuePropName="checked">
              <Checkbox>Discounted</Checkbox>
            </Form.Item>
          </Collapse.Panel>
        </Collapse>

        <Button type="primary" htmlType="submit">
          Sort Products
        </Button>
      </Flex>
    </Form>
  );
}
