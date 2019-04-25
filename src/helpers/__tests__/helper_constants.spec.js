import { createContentSnippet, addSEOFriendlyURL } from '../helper_constants';

describe( 'createContentSnippet function', () => {

	let result;
	const paragaph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada neque vel magna aliquam suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mollis euismod leo sit amet ultrices. Cras pharetra hendrerit eros, eu commodo massa. Suspendisse in est tortor. Ut congue dui ipsum, et interdum turpis consequat et. Quisque ornare turpis id tempus ornare. Etiam ultrices justo ipsum, vel ornare tortor vehicula ac. Phasellus posuere dapibus risus, eu tristique arcu tincidunt gravida. Duis nec risus at nibh sollicitudin aliquam at a risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eu fermentum lectus. Vestibulum quis dui at felis porta scelerisque non sit amet sem. Praesent eget ligula quis quam rhoncus auctor. Nam accumsan finibus sagittis. Fusce porta sollicitudin tempus.`;
	const maxChars = 260;

	beforeEach( () => {
		result = createContentSnippet( paragaph, maxChars );
	} );

	it( 'should return a string', () => {
		expect( result ).toEqual( expect.any( String ) );
	} )

	it( 'should return a string with an eclipse at end', () => {
		expect( result.substring( result.length - 3, result.length ) ).toEqual( '...' );
	} )

	it( `should return a string no more than ${maxChars}`, () => {
		expect( result.length ).toBeLessThanOrEqual( maxChars );
	} )
} );

describe( 'addSEOFriendlyURL function', () => {

	let result;
	const initialTitle = 'Some lessons learnt using GraphQL with React';

	beforeEach( () => {
		result = addSEOFriendlyURL( initialTitle );
	} );

	it( 'should return a string', () => {
		expect( result ).toEqual( expect.any( String ) );
	} )

	it( 'should return a string without any spaces', () => {
		const inValid = /\s/;
		expect( inValid.test( result ) ).toEqual( false );
	} )

	it( 'should return a string with hyphens', () => {
		const inValid = /-/;
		expect( inValid.test( result ) ).toEqual( true );
	} )

	it( 'should return a string with watchwords removed', () => {
		expect( result.includes( 'with' ) ).toEqual( false );
		expect( result.includes( 'some' ) ).toEqual( false );
	} )

	it( 'should return a string with non-watchwords still included', () => {
		expect( result.includes( 'lessons' ) ).toEqual( true );
		expect( result.includes( 'react' ) ).toEqual( true );
	} )
} );
