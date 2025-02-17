import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ClassAPI from "../../../../../services/AdminPage/ClassAPI";
import { UserAPI } from "../../../../../services/AdminPage/UserAPI";
import ClassManagementDataTable from "./components/DataTable/ClassManagementDataTable";
import { ClassManagementDialogAdd } from "./components/DialogAdd/ClassManagementDialogAdd";
import { ClassManagementDialogDelete } from "./components/DialogDelete/ClassManagementDialogDelete";
import { ClassManagementDialogEdit } from "./components/DialogEdit/ClassManagementDialogEdit";
import { CustomToastContainer } from "../../../../../utils/toastElement";
import { toast } from "react-toastify";

const ClassManagementTable = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [dataTable, setDataTable] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const { data: classList, loading: classListLoading } = useQuery(
    "classList",
    () => ClassAPI.classes(),
    { fetchPolicy: "network-only" },
    { enabled: activeTab === "all" }
  );

  useEffect(() => {
    if (classList) {
      setDataTable(classList.data.data);
    }
  }, [activeTab, classList]);

  const handleOpenDelete = (id) => {
    setOpenDelete(!openDelete);
    setSelectedId(id);
  };

  const handleDelete = async () => {
    const id = String(selectedId);
    try {
      await UserAPI.delete(id);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenDelete(false);
      toast("Class deleted successfully!");
    }
  };

  const handleOpenEdit = (id) => setOpenEdit(!openEdit);
  const handleOpenAdd = () => setOpenAdd(!openAdd);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Classes list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all classes
              </Typography>
            </div>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpenAdd}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add class
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardBody className="max-h-[490px] overflow-y-auto px-0">
          <ClassManagementDataTable
            handleOpenEdit={handleOpenEdit}
            handleDelete={handleOpenDelete}
            UserTableData={dataTable}
          />

          <ClassManagementDialogEdit
            openEdit={openEdit}
            handleOpenEdit={handleOpenEdit}
          />
          <ClassManagementDialogDelete
            open={openDelete}
            handleOpen={handleOpenDelete}
            handleDelete={handleDelete}
          />
          <ClassManagementDialogAdd
            openAdd={openAdd}
            handleOpenAdd={handleOpenAdd}
          />
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
      <CustomToastContainer />
    </>
  );
};

export default ClassManagementTable;
