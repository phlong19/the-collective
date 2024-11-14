import { DatePicker, TimePicker } from "antd";

export default function Maintenance() {
  return (
    <div>
      <DatePicker.TimePicker />
      <DatePicker.TimePicker />
      <TimePicker.RangePicker
        showNow
        onOk={(e) => console.log(e[0]?.toDate().toLocaleTimeString())}
      ></TimePicker.RangePicker>
    </div>
  );
}
