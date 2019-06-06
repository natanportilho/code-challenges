import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class Fork
{
    private String name;
    private Lock lock = new ReentrantLock();

    public Fork(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }

    public boolean pickUp(){
        return lock.tryLock();
    }

    public void release (){
        lock.unlock();
    }
}
