import { Callout, Icon } from "@tremor/react";
import { ExclamationIcon } from "@heroicons/react/solid";


const BoxExemple = () => {
  return (
    <div className="callout-box">
      <div className="callout-box-header">
        <h2>Info</h2>
      </div>
      <div className="callout-box-body">
        <Callout
          title="Callout"
          description="This is a callout"
          type="danger"
          color="red"
          icon={ExclamationIcon}
          text="Dynamically revolutionize progressive methodologies via backend markets. Objectively foster client-based expertise with error-free functionalities. Professionally develop functionalized potentialities rather than backend web services. Rapidiously productize client-centered outside the."
          iconColor="red"
          marginTop="mt-0"
        />
      </div>
    </div>
  );
};

export default BoxExemple;
