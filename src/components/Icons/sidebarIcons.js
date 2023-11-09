import React from "react";

function DashboardIcon({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 512 512"
    >
      <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </svg>
  );
}
function AccountsIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 22.009 22.009"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.922 5.502h-9.17V4.035l4.584-2.2 4.586 2.2zM2.751 11.005H9.17M2.751 11.005H9.17M12.38 18.8v-.373a1.926 1.926 0 0 1 1.92-1.92h3.038a1.926 1.926 0 0 1 1.92 1.92v.372a.459.459 0 0 1-.459.459h-5.96a.459.459 0 0 1-.459-.459zM13.985 12.373a1.834 1.834 0 1 1 3.668.015 1.834 1.834 0 0 1-3.668-.015h0zM3.668 11.005V5.502M6.419 11.005V5.502M9.17 11.005V5.502M7.336 19.258H4.323a1.573 1.573 0 0 1-1.572-1.572v-3.013M14.673 3.668h3.013c.868 0 1.572.704 1.572 1.572v3.013"
        />
        <path d="M22.01 22.01H0V0h22.01z" />
      </g>
    </svg>
  );
}

function CardsIcon({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 576 512"
    >
      <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
  );
}

function TransferIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h22v22H0z" />
        <path
          d="M11.917 13.75H4.583a1.833 1.833 0 0 1-1.833-1.833V4.583c0-1.013.82-1.833 1.833-1.833h10.084c1.013 0 1.833.82 1.833 1.833V8.25"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10.542 15.125 1.375-1.375-1.375-1.375"
        />
        <path
          d="M6.417 11v-.917c0-1.013.82-1.833 1.833-1.833h9.167c1.013 0 1.833.82 1.833 1.833v7.334c0 1.013-.82 1.833-1.833 1.833H8.25a1.833 1.833 0 0 1-1.833-1.833h0V16.5"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function LogoutIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 22.009 22.009"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M22.01 22.01H0V0h22.01z" />
        <path
          d="M11.005 4.382v13.244a1.63 1.63 0 0 1-1.985 1.592l-4.075-.906a1.63 1.63 0 0 1-1.277-1.59V5.287a1.63 1.63 0 0 1 1.278-1.591L9.02 2.79a1.63 1.63 0 0 1 1.984 1.59zM8.253 11.94v-1.834M18.341 7.336V5.464a1.834 1.834 0 0 0-1.834-1.834h-2.751M18.341 14.673v1.834a1.834 1.834 0 0 1-1.834 1.834h-2.751M13.756 11.005h4.585M16.507 12.839l1.834-1.834-1.834-1.835"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function SettingIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentcolor"
          strokeWidth="1.5"
        >
          <path d="m3.575 14.343 1.281.196a1.834 1.834 0 0 1 1.552 1.946l-.094 1.294a.92.92 0 0 0 .518.895l.948.457a.921.921 0 0 0 1.024-.153l.952-.88a1.834 1.834 0 0 1 2.489 0l.952.88a.92.92 0 0 0 1.024.153l.95-.458a.916.916 0 0 0 .516-.892l-.095-1.296a1.834 1.834 0 0 1 1.552-1.946l1.282-.196a.92.92 0 0 0 .758-.705l.234-1.025a.918.918 0 0 0-.377-.963l-1.07-.733a1.834 1.834 0 0 1-.553-2.426l.646-1.124a.92.92 0 0 0-.079-1.032l-.655-.822a.92.92 0 0 0-.99-.306l-1.239.38a1.835 1.835 0 0 1-2.244-1.08l-.475-1.204a.92.92 0 0 0-.858-.582l-1.05.002a.92.92 0 0 0-.855.587L9.156 4.5a1.833 1.833 0 0 1-2.248 1.087l-1.29-.396a.92.92 0 0 0-.993.308l-.65.823a.92.92 0 0 0-.073 1.036l.661 1.127c.487.83.249 1.896-.545 2.44l-1.057.724a.92.92 0 0 0-.377.963l.234 1.025c.083.37.384.65.757.706h0z" />
          <path d="M12.756 9.244a2.484 2.484 0 1 1-3.513 3.512 2.484 2.484 0 0 1 3.513-3.512" />
        </g>
        <path d="M0 0h22v22H0z" />
      </g>
    </svg>
  );
}

function RoleIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentcolor"
          strokeWidth="1.5"
        >
          <path d="m3.575 14.343 1.281.196a1.834 1.834 0 0 1 1.552 1.946l-.094 1.294a.92.92 0 0 0 .518.895l.948.457a.921.921 0 0 0 1.024-.153l.952-.88a1.834 1.834 0 0 1 2.489 0l.952.88a.92.92 0 0 0 1.024.153l.95-.458a.916.916 0 0 0 .516-.892l-.095-1.296a1.834 1.834 0 0 1 1.552-1.946l1.282-.196a.92.92 0 0 0 .758-.705l.234-1.025a.918.918 0 0 0-.377-.963l-1.07-.733a1.834 1.834 0 0 1-.553-2.426l.646-1.124a.92.92 0 0 0-.079-1.032l-.655-.822a.92.92 0 0 0-.99-.306l-1.239.38a1.835 1.835 0 0 1-2.244-1.08l-.475-1.204a.92.92 0 0 0-.858-.582l-1.05.002a.92.92 0 0 0-.855.587L9.156 4.5a1.833 1.833 0 0 1-2.248 1.087l-1.29-.396a.92.92 0 0 0-.993.308l-.65.823a.92.92 0 0 0-.073 1.036l.661 1.127c.487.83.249 1.896-.545 2.44l-1.057.724a.92.92 0 0 0-.377.963l.234 1.025c.083.37.384.65.757.706h0z" />
          <path d="M12.756 9.244a2.484 2.484 0 1 1-3.513 3.512 2.484 2.484 0 0 1 3.513-3.512" />
        </g>
        <path d="M0 0h22v22H0z" />
      </g>
    </svg>
  );
}

function PackageIcon({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 640 512"
    >
      <path d="M256 48c0-26.5 21.5-48 48-48H592c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16V253.3c18.6-6.6 32-24.4 32-45.3V176c0-26.5-21.5-48-48-48H256V48zM571.3 347.3c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 310.6V432c0 8.8 7.2 16 16 16s16-7.2 16-16V310.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0zM0 176c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V176zm352 80V480c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V256H352zM144 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H144z" />
    </svg>
  );
}

function OrganizationIcon({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 576 512"
    >
      <path d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z" />
    </svg>
  );
}

function LessonsIcon({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 640 512"
    >
      <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    </svg>
  );
}

function BooksIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 6.002H3a1 1 0 0 0-1 1v9.996c0 .547.448.996 1 .996h18a1 1 0 0 0 1-.996v-9.996a1 1 0 0 0-1-1zm-1 2v7.996H4v-7.996h16zm-3-5.996a1 1 0 0 0-1 1v1H8v-.5a3.5 3.5 0 0 1 7 0v.5h3V4.006a1 1 0 0 0-1-1zm-1 2H9v-.5a2.5 2.5 0 0 1 5 0v.5z" />
    </svg>
  );
}

function UsersIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 640 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
    </svg>
  );
}

function SchoolIcon({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 640 512"
    >
      <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" />
    </svg>
  );
}

export {
  DashboardIcon,
  AccountsIcon,
  CardsIcon,
  TransferIcon,
  LogoutIcon,
  SettingIcon,
  RoleIcon,
  PackageIcon,
  OrganizationIcon,
  LessonsIcon,
  BooksIcon,
  UsersIcon,
  SchoolIcon,
};
