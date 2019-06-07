public class Thread1 implements Runnable
{
    private Foo foo;

    public Thread1(Foo foo)
    {
        this.foo = foo;
    }

    @Override
    public void run()
    {
        try
        {
            foo.first();
        } catch (InterruptedException e)
        {
            System.out.println("Ooops, we had a problem!");
        }
    }
}
