"use server";
import SearchInput from "components/templates/SearchInput";
import PreLoader from "core/hocs/PreLoader";
import { setUsers } from "core/slice/reduxSearchTemplateSlice";
import { store } from "core/store";

const ReduxUser = async () => {
  "use server";
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList = await res.json();
  store.dispatch(setUsers(userList));

  return (
    <div className="flex-col items-center justify-center w-100">
      <PreLoader actionHandler={setUsers} actionPayload={userList} />
      <h3>Taken to /puressr</h3>
      <SearchInput />
    </div>
  );
};

export default ReduxUser;
