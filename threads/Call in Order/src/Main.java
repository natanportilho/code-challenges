/*
* Call In Order: Suppose we have the following code:
public class Foo {
public Foo() { ... }
public void first() { ... } public void second() { ... } public void third() { ... }
}
The same instance of Foo will be passed to three different threads. ThreadA will call first threadB will call second, and thread( will call third. Design a mechanism to ensure that first is called before second and second is called before third.
*/
public class Main
{

    public static void main(String[] args)
    {
        Foo foo = new Foo();
        Thread1 t1 = new Thread1(foo);
        Thread2 t2 = new Thread2(foo);
        Thread3 t3 = new Thread3(foo);

        Thread a = new Thread(t1);
        a.start();

        Thread b = new Thread(t2);
        b.start();

        Thread c = new Thread(t3);
        c.start();
    }
}
