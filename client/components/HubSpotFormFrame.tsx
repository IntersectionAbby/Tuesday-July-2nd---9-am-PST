type HubSpotFormFrameProps = {
  className?: string;
  iframeId?: string;
};

export default function HubSpotFormFrame({
  className = '',
  iframeId = 'inline-q1t9YHGh4x3jWhiFitgN',
}: HubSpotFormFrameProps) {
  return (
    <iframe
      className={`hs-form-frame min-h-[154px] ${className}`.trim()}
      src="https://api.leadconnectorhq.com/widget/form/q1t9YHGh4x3jWhiFitgN"
      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', background: '#080b0f', colorScheme: 'dark' }}
      id={iframeId}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Thursday July 30th Webinar Form"
      data-height="434"
      data-layout-iframe-id={iframeId}
      data-form-id="q1t9YHGh4x3jWhiFitgN"
      title="Thursday July 30th Webinar Form"
    />
  );
}
