import { Trans } from "react-i18next";
import { FileOperationFormat } from "@shared/types";
import useStores from "~/hooks/useStores";
import DropToImport from "~/scenes/Settings/components/DropToImport";
import Text from "@shared/components/Text";

/**
 * Dialog for importing a Confluence HTML export zip file.
 */
function ImportConfluenceDialog() {
  const { dialogs } = useStores();

  return (
    <>
      <Text as="p">
        <Trans
          defaults={`In a Confluence space, navigate to <em>Space Settings -> Manage space -> Export space</em> and choose to export as HTML with the "Normal Export" option.`}
          components={{
            em: <strong />,
          }}
        />
      </Text>
      <DropToImport
        onSubmit={dialogs.closeAllModals}
        format={FileOperationFormat.HTMLZip}
      >
        <Trans
          defaults={`Drag and drop the zip file from Confluence's HTML export option, or click to upload`}
        />
      </DropToImport>
    </>
  );
}

export default ImportConfluenceDialog;
