public class Philosopher implements Runnable
{
    private String name;
    private Fork leftFork;
    private Fork rightFork;

    public Philosopher(String name, Fork leftFork, Fork rightFork)
    {
        this.name = name;
        this.leftFork = leftFork;
        this.rightFork = rightFork;
    }

    @Override
    public void run()
    {
        int counter = 0;
        while (counter < 5)
        {
            try
            {
                System.out.println(this.name + " is hungry.");
                Thread.sleep(1000);
                if (pickUpForks())
                    eat();

            } catch (InterruptedException e)
            {
                System.out.println("Exception: We have a problem!");
            }
            counter++;
        }
    }

    private void eat() throws InterruptedException
    {
        Thread.sleep(1000);
        System.out.println("Philosopher " + this.name + " is having a delicious meal.");
        Thread.sleep(1000);
        releaseForks();
        System.out.println(leftFork.getName() + " now is free.");
        System.out.println(rightFork.getName() + " now is free.");
    }

    private boolean pickUpForks()
    {
        if (!leftFork.pickUp())
            return false;

        if (!rightFork.pickUp())
        {
            leftFork.release();
            return false;
        }
        System.out.println("Philosopher " + this.name + " picking up left fork " + leftFork.getName() + ".");
        System.out.println("Philosopher " + this.name + " picking up right fork " + rightFork.getName() + ".");
        return true;
    }

    private void releaseForks()
    {
        leftFork.release();
        rightFork.release();
    }
}
