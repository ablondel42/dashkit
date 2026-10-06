import { memo } from "react";

import { Button } from "@/components/ui/button";
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeFooter,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from "@/components/base/base-node";
import { Rocket } from "lucide-react";
import { Handle, Position } from "@xyflow/react";

export const SystemNode = memo(() => {
  return (
    <BaseNode className="w-96">
      <BaseNodeHeader className="border-b">
        <Rocket className="size-4" />
        <BaseNodeHeaderTitle>Header</BaseNodeHeaderTitle>
      </BaseNodeHeader>
      <BaseNodeContent>
        <h3 className="text-lg font-bold">Content</h3>
        <p className="text-xs">{"{...}"}</p>
      </BaseNodeContent>
      <BaseNodeFooter>
        <h4 className="text-md self-start font-bold">Footer</h4>

        <Button
          variant="outline"
          className="nodrag w-full"
        >
          Action 1
        </Button>
      </BaseNodeFooter>
      <Handle
        type="source"
        position={Position.Bottom}
      />
      <Handle
        type="target"
        position={Position.Top}
      />
    </BaseNode>
  );
});

SystemNode.displayName = "SystemNode";
