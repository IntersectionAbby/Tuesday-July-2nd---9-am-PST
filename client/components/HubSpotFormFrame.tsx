type HubSpotFormFrameProps = {
  className?: string;
};

export default function HubSpotFormFrame({ className = '' }: HubSpotFormFrameProps) {
  return (
    <div
      className={`hs-form-frame min-h-[154px] ${className}`.trim()}
      data-region="na2"
      data-form-id="6a78941d-dd57-4227-a0c7-545f1d91c29f"
      data-portal-id="50180818"
    />
  );
}
