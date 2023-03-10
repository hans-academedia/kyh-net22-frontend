namespace ServiceLifeTimes.Services
{
    public class ScopedService
    {
        private Guid id;

        public ScopedService()
        {
            id = Guid.NewGuid();
        }

        public Guid GetId()
        {
            return id;
        }
    }
}
