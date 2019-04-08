import React from 'react';
import ErrorBoundary from '../error-boundary';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	let render;
	let componentInstance;

	beforeEach( () => {
		component = renderer.create(
			<ErrorBoundary />
		);
		componentInstance = component.getInstance();
	});

	describe( 'ErrorBoundary', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});

		describe( 'should return null if default (null) state error is unchanged', () => {
			beforeEach( () => {
				render = componentInstance.render();
			});

			it( '', () => {
				expect( render ).toEqual( null );
			});
		});

		describe( 'state error is default (null) then null default is returned', () => {
			beforeEach( () => {
				componentInstance.setState({ 'errorInfo': 'error! error! error!' });
				render = componentInstance.render();
			});

			it( '', () => {
				expect( render ).toEqual( expect.any( Object ) );
				expect( render ).not.toEqual( null );
			});
		});
	});
});
