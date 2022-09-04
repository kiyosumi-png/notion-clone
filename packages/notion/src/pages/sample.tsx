const items = [
  { id: "1", name: "item1" },
  { id: "2", name: "item2" },
  { id: "3", name: "item3" },
];

interface IsRotate {
  [id: string]: boolean;
}

const isRotate: IsRotate = {
  1: false,
  2: true,
};

const nested: { [index: number]: IsRotate } = {
  0: {
    1: false,
  },
  1: {
    2: true,
  },
};

export const Sample = () => {
  const obj: { [index: number]: IsRotate } = {
    ...items.map(({ id }) => ({ [id]: false })),
  };
  const assignedObj: IsRotate = Object.assign(
    {},
    ...items.map(({ id }) => ({ [id]: false }))
  );

  console.log(obj[1][items[1].id]);
  console.log(assignedObj[2]);

  return <>Sample Page</>;
};

export default Sample;
