package com.devote.crm.test;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = new String("Allen"); // java 内部声明它是final的
//		s = "bob"; // 会报错
		new Thread() {  // anonymous inner class
		   	public void run() {System.out.print(s);}
		}.start();
	}

}
