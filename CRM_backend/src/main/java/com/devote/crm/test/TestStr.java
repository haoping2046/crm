package com.devote.crm.test;

public class TestStr {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String a = new String("Allen");
		String b = new String("Allen");
		String c = "Allen";    	
		System.out.println(a == b);  // false
		System.out.println(a.equals(b));  // true
		System.out.println(a.hashCode() == b.hashCode());  // true
		System.out.println(a.hashCode() == c.hashCode());  // true
	}

}
