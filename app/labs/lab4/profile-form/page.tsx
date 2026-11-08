import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormsPage() {
  return (
    <div id="wd-profile-forms-page" className="flex flex-col gap-8 p-4">
      <h1>Profile Forms: Comparing State Management</h1>

      <ProfileForm />

      <hr />

      <ContextProfileForm />

      <hr />

      <ZustandProfileForm />
    </div>
  );
}
