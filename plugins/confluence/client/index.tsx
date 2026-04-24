import { t } from "i18next";
import * as React from "react";
import { cdnPath } from "@shared/utils/urls";
import Button from "~/components/Button";
import { Hook, PluginManager } from "~/utils/PluginManager";
import useStores from "~/hooks/useStores";
import config from "../plugin.json";
import ImportConfluenceDialog from "./ImportConfluenceDialog";

function ConfluenceImportButton() {
  const { dialogs } = useStores();

  return (
    <Button
      type="submit"
      onClick={() => {
        dialogs.openModal({
          title: t("Import data"),
          content: <ImportConfluenceDialog />,
        });
      }}
      neutral
    >
      {t("Import")}…
    </Button>
  );
}

PluginManager.add([
  {
    ...config,
    type: Hook.Imports,
    value: {
      title: "Confluence",
      subtitle: t("Import pages from a Confluence instance"),
      icon: <img src={cdnPath("/images/confluence.png")} alt="" width={28} />,
      action: <ConfluenceImportButton />,
    },
  },
]);
