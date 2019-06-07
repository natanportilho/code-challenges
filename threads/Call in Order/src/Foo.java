import java.util.concurrent.Semaphore;

public class Foo
{
    private static final int MAX_AVAILABLE = 1;
    private final Semaphore available = new Semaphore(MAX_AVAILABLE, true);

    public void first() throws InterruptedException
    {
        available.acquire();
        System.out.println("Calling first");
        Thread.sleep(300);
        available.release();
    }

    public void second() throws InterruptedException
    {
        available.acquire();
        System.out.println("Calling second");
        Thread.sleep(300);
        available.release();
    }

    public void third() throws InterruptedException
    {
        available.acquire();
        System.out.println("Calling third");
        Thread.sleep(300);
        available.release();
    }
}
