import { Group } from "@/components/Group";
import { Modal } from "@/components/Modal";

const groups = [
  {
    name: "Group Name 1",
    reports: [
      "report name 1",
      "report name 2",
      "report name 3",
      "really long and super cool report name that truncates",
      "report name 5",
      "report name 6",
      "report name 7",
    ],
  },
  {
    name: "Group Name 2",
    reports: [
      "report name 1",
      "report name 2",
      "report name 3",
      "really long and super cool report name that truncates",
      "report name 5",
      "report name 6",
      "report name 7",
    ],
  },
  {
    name: "Group Name 1",
    reports: [
      "report name 1",
      "report name 2",
      "report name 3",
      "really long and super cool report name that truncates",
      "report name 5",
      "report name 6",
      "report name 7",
    ],
  },
  {
    name: "Really really super long group with really cool name",
    reports: [
      "report name 1",
      "report name 2",
      "report name 3",
      "really long and super cool report name that truncates",
      "report name 5",
      "report name 6",
      "report name 7",
    ],
  },
  {
    name: "Group Name 1",
    reports: [
      "report name 1",
      "report name 2",
      "report name 3",
      "really long and super cool report name that truncates",
      "report name 5",
      "report name 6",
      "report name 7",
    ],
  },
  {
    name: "Group Name 1",
    reports: [
      "report name 1",
      "report name 2",
      "report name 3",
      "really long and super cool report name that truncates",
      "report name 5",
      "report name 6",
      "report name 7",
    ],
  },
];

export default function Home() {
  return (
    <div className=" grid grid-cols-5 h-screen">
      <div className=" col-span-1 border border-gray-300 shadow-lg">
        {groups?.map((item, index) => (
          <Group key={index} index={index} data={item} />
        ))}
      </div>
    </div>
  );
}
