package com.devote.crm.test;

import org.springframework.objenesis.instantiator.basic.NewInstanceInstantiator;

class O {
	class B {
		void foo() {
			System.out.print("sss");
		}
		
	}
	static class C{
		
	}
	
	O a = new O();
	O.B b = a.new B();
	
//	B b = new A.B();

	
	C c = new O.C();
}

class A {
	public static void main(String args[]) {

		O a = new O();
		O.B b = a.new B();

		b.foo();
//		O.B bb = new O.B();
	}
}
//class A { 	
//   	// public/protected/default/private class
//   	class B {}
//   	static class C {}  // "static inner class" or "nested class"
//   	void foo1() {
//          	// Local Inner Class (1D)
//          		class D {} 
//   	}
//   	void foo2() {
//          	// Local Inner Class (2D)
//          		class D{} 
//   	}
//   	public static void main(String arg[]) {
//          	// Instantiate non-static class B
//          	A a = new A();
//          	A.B b = a.new B();     	
//          	// Instantiate static class C
//          	A.C c = new A.C();
//          	// Anonymous Inner Class (A$1.class)
//          	I i = new I() {  // subclass's object of the interface
//                 	@Override
//                 	public void foo(){}
//          	};
//          	
//          	AA.B aab = new AA.B();
//}}
//interface I {
//   	void foo();
//}

//public class A {
//   	class B {
//          	void foo() {}// wrong --> "static class B / void foo() {}"	
//          	C c = new C();
//   	}
//   	static class C {
//          	static void foo() {}
//          	void foo2() {}
//          	B b = (new A()).new B();  // wrong --> "B b = (new A()).new B();"
//   	}
//   	static void foo1() {
//   			(new A()).new B();  // wrong --> "(new A()).new B();"
//          	new C();
//   	}
//   	void foo2() {
//          	new B();
//          	new C();
//}}

