import { useMemo } from 'react';

export default function useConstant<A>(builder: () => A): A {
  return useMemo<any>(builder, []);
}
