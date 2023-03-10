namespace ServiceLifeTimes.Services
{
    public class SingletonService
    {
        private Guid id;

        public SingletonService()
        {
            id = Guid.NewGuid();
        }

        public Guid GetId()
        {
            return id;
        }
    }
}
