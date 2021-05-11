// type TProps = NoChildren & {
//   id: string;
//   buttonLabel: string | null;
//   buttonValue: Nullable<number>;
//   buttonOption: Nullable<TOption>;
//   obj: Nullable<{
//     id: string;
//     value: number;
//   }>;
// };

// type TOrders = RoA<TOption>;

// const orders: TOrders = ["A", "B", "B", "C"];

// type TCats = RoA<TCat>;

// export const Button: React.FC<TProps> = ({ id, buttonLabel }) => {
//   return <button>{buttonLabel}</button>;
// };

// export type TOption = "A" | "B";

// import React from 'react'

// type TProps = React.PropsWithChildren<{
//   id: string
//   value: number
//   nameLabel?: string
// }>

// export const SomeComponent: React.FC<TProps> = ({ children, id, value, nameLabel = "Some label" }) => {
// const [state, setState] = React.useState(id)
//   const [option, setOption] = React.useState<TOption>('A')

//   return (
//     null
//   )
// }
