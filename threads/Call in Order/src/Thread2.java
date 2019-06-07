public class Thread2 implements Runnable
{
    private Foo foo;

    public Thread2(Foo foo)
    {
        this.foo = foo;
    }

    @Override
    public void run()
    {
        try
        {
            foo.second();
        } catch (InterruptedException e)
        {
            System.out.println("Ooops, we had a problem!");
        }
    }
}
