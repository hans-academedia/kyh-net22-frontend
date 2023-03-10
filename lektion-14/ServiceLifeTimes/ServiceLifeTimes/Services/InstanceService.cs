namespace ServiceLifeTimes.Services
{
    public class InstanceService
    {
        private Guid id;

        public InstanceService()
        {
            id = Guid.NewGuid();
        }

        public Guid GetId()
        {
            return id;
        }
    }
}
