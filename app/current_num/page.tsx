"use client";
import type { Observable } from "rxjs";

import { from } from "rxjs";
import { map, filter, mergeMap, delay,takeUntil } from "rxjs/operators";

import { useState, useEffect } from "react";
import { Button } from "antd";

let numbersObservable = from([1, 2, 3, 4, 5, 6,7, 8]);
let squaredNumbers = numbersObservable.pipe(
  filter((val) => val > 2),
  mergeMap((val) => from([val]).pipe(delay(1000 * val))),
  map((n) => n * n)
);

const useObservable = (observable, setter) => {
  useEffect(() => {
    const subscription = observable.subscribe((res) => {
      setter(res);
    });
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};
export default function Count() {
  const [curNum, setCurNum] = useState(0);
  useObservable(squaredNumbers, setCurNum);
  return (
    <>
      <h2 className="text-red-900"> current number is {curNum} </h2>
    </>
  );
}
