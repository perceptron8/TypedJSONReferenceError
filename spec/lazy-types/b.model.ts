import { jsonMember, jsonObject } from 'typedjson';
import { A } from './a.model';

@jsonObject
export class B {
	@jsonMember(() => A)
	a: A;

	@jsonMember(() => String)
	name: string;

	test(): true {
		return true;
	}
}
