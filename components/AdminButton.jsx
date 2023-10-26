import {useState, useEffect } from "react";
import { useOrganization } from "@clerk/nextjs";
import  { OrganizationMembershipResource } from "@clerk/types";

const AdminButton = () => {
  const {
    organization: currentOrganization,
    membership,
    isLoaded,
  } = useOrganization();

  if (!isLoaded || !currentOrganization) {
    return null;
  }
  
  const [buttonState, setButtonState] = useState("cargando");
  const isAdmin = membership.role === "admin";

  useEffect(() => {
    if (!isLoaded || !currentOrganization) {
      setButtonState("oculto");
    } else if (isAdmin) {
      setButtonState("visible");
    } else {
      setButtonState("oculto");
    }
  }, [isLoaded, currentOrganization, isAdmin]);

  return (
    <div>
      {buttonState === "visible" && <button>Hola admin</button>}
    </div>
  );
};

export default AdminButton;
