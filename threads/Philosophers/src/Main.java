public class Main
{

    public static void main(String[] args)
    {
        Fork fork1 = new Fork("fork_1");
        Fork fork2 = new Fork("fork_2");
        Fork fork3 = new Fork("fork_3");
        Fork fork4 = new Fork("fork_4");
        Fork[] forks = new Fork[4];
        forks[0] = fork1;
        forks[1] = fork2;
        forks[2] = fork3;
        forks[3] = fork4;

        for (int i = 0; i < 4; i++)
        {
            Philosopher philosopher;
            if (i == 0)
            {
                System.out.println("Philosopher " + (i + 1) + " will use forks " + forks[i].getName() + " and " + forks[forks.length - 1].getName());
                philosopher = new Philosopher("Philosopher_" + (i + 1), forks[i], forks[forks.length - 1]);
            } else
            {
                System.out.println("Philosopher " + (i + 1) + " will use forks " + forks[i].getName() + " and " + forks[i - 1].getName());
                philosopher = new Philosopher("Philosopher_" + (i + 1), forks[i], forks[i - 1]);
            }
            Thread thread = new Thread(philosopher);
            thread.start();
        }
    }
}
