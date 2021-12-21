import 'jasmine';
import 'reflect-metadata';

import { TypedJSON } from 'typedjson';
import { A } from './a.model';
import { B } from './b.model';

describe('lazy, lazy types', () => {
	it('should work on multi file imports', () => {
		const result = TypedJSON.parse({
			b: {
				a: {
					b: {
						name: 'b2',
					},
					name: 'a2',
				},
				name: 'b1',
			},
			name: 'a1',
		}, A);

		expect(result).toBeInstanceOf(A);
		expect(result.name).toBe('a1');
		expect(result.test()).toBeTrue();
		expect(result.b).toBeInstanceOf(B);
		expect(result.b.name).toBe('b1');
		expect(result.b.test()).toBeTrue();
		expect(result.b.a).toBeInstanceOf(A);
		expect(result.b.a.name).toBe('a2');
		expect(result.b.a.test()).toBeTrue();
		expect(result.b.a.b).toBeInstanceOf(B);
		expect(result.b.a.b.name).toBe('b2');
		expect(result.b.a.b.test()).toBeTrue();
	});
});
