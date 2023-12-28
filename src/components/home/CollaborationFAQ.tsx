import { FaUser, FaCalendarAlt, FaMoneyBill, FaUserFriends, FaChalkboardTeacher,
    FaUserGraduate } from 'react-icons/fa';

function CollaborationFAQ() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions.</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {/* FAQ 1 */}
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <FaUser className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Can non-developers join the collaboration?</h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Yes, non-developers are welcome to join our collaboration efforts. We value diverse skills and perspectives.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <FaCalendarAlt className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">How often do collaborations occur?</h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Collaborations typically happen on an annual basis, providing ample opportunities for participation and contribution.
              </p>
            </div>
          </div>
 

{/* FAQ 3 */}
<div>
  <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
    <FaUserGraduate className="w-6 h-6" />
  </div>

  <div>
    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">What career guidelines do you provide for newcomers?</h1>

    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
      We offer career guidance sessions and resources to help newcomers navigate their career paths in the tech industry.
    </p>
  </div>
</div>

{/* FAQ 4*/}
<div>
  <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
    <FaMoneyBill className="w-6 h-6" />
  </div>

  <div>
    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Should I pay before joining the collaboration?</h1>

    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
      No, our collaboration programs are free to join. We believe in providing opportunities for collaboration without financial barriers.
    </p>
  </div>
</div>

{/* FAQ 5 */}
<div>
  <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
    <FaUserFriends className="w-6 h-6" />
  </div>

  <div>
    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Are there volunteer options available?</h1>

    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
      Yes, we offer volunteer positions for individuals interested in contributing their time and expertise to our collaborative initiatives. Reach out to learn more about volunteer opportunities.
    </p>
  </div>
</div>

{/* FAQ 6 */}
<div>
  <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
    <FaChalkboardTeacher className="w-6 h-6" />
  </div>

  <div>
    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Do senior developers participate in these programs?</h1>

    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
      Absolutely! Our programs welcome developers of all levels, including experienced senior developers. Collaborating with seniors provides valuable mentorship and diverse perspectives.
    </p>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}

export default CollaborationFAQ;
