import * as React from "react";

function SvgInstagram(props) {
  return (
    <svg
      height="30pt"
      className={props.class}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <circle id="insta" cx={256} cy={256} r={256} fill="#4A7AFF" />
      <path
        d="M374.71 132.922c-30.587 3.872-62.479 3.737-94.575.681-44.822-3.448-110.33-24.135-134.465 17.239-38.772 66.236-19.649 151.035-10.614 226.078l134.737 134.708c130.388-6.923 234.886-111.407 241.831-241.79L374.71 132.922z"
        fill="#0053BF"
      />
      <g fill="#fff">
        <path d="M315.227 109.468H196.772c-48.14 0-87.304 39.164-87.304 87.304v118.455c0 48.138 39.164 87.305 87.305 87.305h118.455c48.138 0 87.305-39.165 87.305-87.305V196.772c-.001-48.14-39.166-87.304-87.306-87.304zm57.823 205.76c0 31.934-25.888 57.822-57.822 57.822H196.773c-31.934 0-57.822-25.888-57.822-57.822V196.773c0-31.934 25.888-57.823 57.822-57.823h118.455c31.934 0 57.822 25.89 57.822 57.823v118.455z" />
        <path d="M256 180.202c-41.794 0-75.798 34.004-75.798 75.798 0 41.791 34.004 75.795 75.798 75.795s75.795-34.001 75.795-75.795-34.001-75.798-75.795-75.798zm0 122.111c-25.579 0-46.316-20.733-46.316-46.313s20.737-46.316 46.316-46.316 46.313 20.735 46.313 46.316c0 25.579-20.734 46.313-46.313 46.313z" />
      </g>
      <g fill="#d1d1d1">
        <path d="M350.103 180.774c0 10.03-8.132 18.163-18.163 18.163-10.03 0-18.163-8.133-18.163-18.163 0-10.031 8.133-18.163 18.163-18.163 10.033 0 18.163 8.13 18.163 18.163z" />
        <path d="M315.228 109.468h-59.802v29.482h59.802c31.934 0 57.822 25.89 57.822 57.823v118.455c0 31.934-25.888 57.822-57.822 57.822h-59.802v29.482h59.802c48.138 0 87.304-39.165 87.304-87.305V196.772c0-48.14-39.165-87.304-87.304-87.304z" />
        <path d="M256 180.202c-.193 0-.381.014-.574.014v29.482c.191-.002.381-.014.574-.014 25.579 0 46.313 20.735 46.313 46.316 0 25.579-20.733 46.313-46.313 46.313-.193 0-.383-.012-.574-.014v29.482c.193.002.381.014.574.014 41.794 0 75.795-34.002 75.795-75.795 0-41.794-34.001-75.798-75.795-75.798z" />
      </g>
    </svg>
  );
}

export default SvgInstagram;
