import { jsLib1 } from '@test/lib1';

export function jsLib2(): string {
  jsLib1();
  return 'js-lib2';
}
