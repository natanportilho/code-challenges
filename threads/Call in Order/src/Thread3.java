public class Thread3 implements Runnable
{
    private Foo foo;

    public Thread3(Foo foo)
    {
        this.foo = foo;
    }

    @Override
    public void run()
    {
        try
        {
            foo.third();
        } catch (InterruptedException e)
        {
            System.out.println("Ooops, we had a problem!");
        }
    }
}
