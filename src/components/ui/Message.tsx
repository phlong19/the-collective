import { useQuery } from "@tanstack/react-query";
import { getProfiles } from "../../services/api/profile";

export default function Message() {
  const { data, error, isLoading } = useQuery({
    queryFn: getProfiles,
    queryKey: ["profile"],
  });

  if (isLoading) {
    return <span>spinner</span>;
  }

  return (
    <div>
      Message
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <span>{item.id}</span>
            <p>name: {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
