 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/authModals/Login";
import Register from "@/components/authModals/Register";

const AuthModal = () => {
  return (
    <div>
      <Tabs defaultValue="register" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login/>
        </TabsContent>
        <TabsContent value="register">
          <Register/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthModal;
