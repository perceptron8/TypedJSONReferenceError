import { jsonMember, jsonObject } from 'typedjson';
import { B } from './b.model';

@jsonObject
export class A {
	@jsonMember(() => B)
	b: B;

	@jsonMember(() => String)
	name: string;

	test(): true {
		return true;
	}
}
